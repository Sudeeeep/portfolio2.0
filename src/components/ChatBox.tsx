'use client'

import { useRef, useState } from 'react'

type Message = { role: 'user' | 'assistant'; content: string }

const SUGGESTIONS = [
  'What did Sudeep do at LTIMindtree?',
  'What is DocTalk?',
  'What is his experience with LLMs?',
  'Is he open to remote roles?',
]

const MAX_INPUT_CHARS = 500

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  function scrollToBottom() {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight })
    })
  }

  async function ask(question: string) {
    const q = question.trim().slice(0, MAX_INPUT_CHARS)
    if (!q || busy) return

    const history: Message[] = [...messages, { role: 'user', content: q }]
    setMessages([...history, { role: 'assistant', content: '' }])
    setInput('')
    setBusy(true)
    scrollToBottom()

    const setAnswer = (content: string) =>
      setMessages([...history, { role: 'assistant', content }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      })

      if (!res.ok || !res.body) {
        setAnswer(await res.text().catch(() => '') || 'Something went wrong. Try again in a bit.')
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let answer = ''
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        answer += decoder.decode(value, { stream: true })
        setAnswer(answer)
        scrollToBottom()
      }
    } catch {
      setAnswer('Something went wrong. Try again in a bit.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="border border-edge rounded-lg bg-surface/50">
      {messages.length === 0 ? (
        <div className="p-5 flex flex-col gap-2.5">
          <p className="font-mono text-xs text-muted mb-1">try one of these:</p>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => ask(s)}
              className="text-left text-sm text-muted border border-edge rounded px-3 py-2 w-fit
                         hover:text-accent hover:border-accent/50 transition-colors cursor-pointer"
            >
              {s}
            </button>
          ))}
        </div>
      ) : (
        <div ref={listRef} className="p-5 max-h-96 overflow-y-auto flex flex-col gap-4">
          {messages.map((m, i) => (
            <div key={i} className="text-sm leading-relaxed">
              <span className={`font-mono text-xs ${m.role === 'user' ? 'text-accent' : 'text-muted'}`}>
                {m.role === 'user' ? 'you' : 'bot'}
              </span>
              <p className={`mt-1 whitespace-pre-wrap ${m.role === 'user' ? 'text-ink' : 'text-muted'}`}>
                {m.content || (busy && i === messages.length - 1 ? '…' : '')}
              </p>
            </div>
          ))}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          ask(input)
        }}
        className="flex items-center gap-3 border-t border-edge px-5 py-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={MAX_INPUT_CHARS}
          placeholder="ask something about me…"
          aria-label="Ask a question about Sudeep"
          className="flex-1 bg-transparent text-sm text-ink placeholder:text-muted/50
                     focus:outline-none"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="font-mono text-xs text-accent border border-accent/40 rounded px-3 py-1.5
                     hover:bg-accent/10 transition-colors cursor-pointer
                     disabled:opacity-40 disabled:cursor-default"
        >
          {busy ? '…' : 'send ↵'}
        </button>
      </form>
    </div>
  )
}
