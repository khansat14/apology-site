"use client";

import {
  Heart,
  MessageCircleHeart,
  Cookie,
  Ear,
  HandHeart,
} from "lucide-react";

interface ApologyStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  tip: string;
}

const steps: ApologyStep[] = [
  {
    step: 1,
    title: "Acknowledge the Mistake",
    description:
      'No excuses, no "but you also..." nonsense. Look her in the eyes and say: "I was wrong. Full stop." The key is sincerity — she can smell a fake apology from three rooms away.',
    icon: <MessageCircleHeart className="h-8 w-8" />,
    tip: "Pro tip: Do NOT start with \"I'm sorry you feel that way.\" That's not an apology. That's a declaration of war.",
  },
  {
    step: 2,
    title: "Bring Her Favorite Snacks",
    description:
      "Food is the language of love. Know her comfort snacks by heart. Show up with her favorites — bonus points if you remember the exact brand. This shows you actually pay attention.",
    icon: <Cookie className="h-8 w-8" />,
    tip: "Emergency kit: chocolate, her favorite chips, and that one drink she always gets. Never show up empty-handed.",
  },
  {
    step: 3,
    title: "Listen Actively (Actually Listen)",
    description:
      "Put. The. Phone. Down. Let her express how she feels without interrupting. Nod. Make eye contact. Repeat back what she said so she knows you heard her. This is not the time for solutions — just listen.",
    icon: <Ear className="h-8 w-8" />,
    tip: "The golden rule: If she pauses, she\u2019s not done. Wait at least 5 seconds before responding. Silence is your friend here.",
  },
  {
    step: 4,
    title: "Show Change Through Actions",
    description:
      "Words are nice, but actions are everything. Don\u2019t just say you\u2019ll do better — actually do better. Small consistent changes beat one grand gesture. She\u2019ll notice. She always notices.",
    icon: <HandHeart className="h-8 w-8" />,
    tip: "Start today, not tomorrow. \u2018Tomorrow\u2019 is where broken promises go to retire.",
  },
];

export default function ApologyInstructions() {
  return (
    <section
      id="apology"
      className="relative overflow-hidden bg-gradient-to-b from-[#fff0e6] to-[#fff9f5] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-rose-200/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700">
            <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />
            The Official Protocol
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            The Apology{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Protocol
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-500 sm:text-lg">
            A step-by-step, field-tested guide on how to apologize like you
            actually mean it. Follow carefully — your relationship depends on
            it.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-[2px] bg-gradient-to-b from-pink-300 via-rose-300 to-pink-100 md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="group relative flex flex-col md:flex-row md:gap-8"
              >
                <div className="relative z-10 mb-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-200 transition-transform group-hover:scale-110 md:mb-0">
                  <span className="text-xl font-bold">{step.step}</span>
                </div>

                <div className="flex-1 rounded-2xl border border-pink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-100/50 sm:p-8">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="rounded-xl bg-pink-50 p-3 text-pink-500 transition-colors group-hover:bg-pink-100">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-4 leading-relaxed text-gray-600">
                    {step.description}
                  </p>

                  <div
                    className={`rounded-xl p-4 text-sm ${
                      index % 2 === 0
                        ? "bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700"
                        : "bg-gradient-to-r from-orange-50 to-amber-50 text-amber-700"
                    }`}
                  >
                    <span className="font-semibold">💡 {step.tip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
