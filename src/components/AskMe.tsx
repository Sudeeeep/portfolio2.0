import Section from '@/components/Section'
import ChatBox from '@/components/ChatBox'

export default function AskMe() {
  return (
    <Section id="ask" label="ask me anything" title="Chat with my resume">
      <p className="text-muted text-sm leading-relaxed max-w-prose mb-6">
        Ask this bot anything about my experience, projects, or skills. It answers from my resume
        and this site, nothing else. It runs on the same idea as DocTalk, minus the retrieval,
        because a resume fits in a single prompt.
      </p>
      <ChatBox />
      <p className="font-mono text-xs text-muted/60 mt-3">
        AI-generated answers can be wrong. For anything important, email me.
      </p>
    </Section>
  )
}
