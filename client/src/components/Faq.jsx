import React from "react";

const Faq = () => {
  return (
    <section
      id="faqs"
      class="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 mt-20 scroll-m-20 sm:mt-24 sm:scroll-m-24 xl:mt-32 xl:scroll-m-32"
    >
      <div class="mx-auto grid max-w-[40rem] grid-cols-1 gap-x-14 gap-y-16 lg:max-w-none lg:grid-cols-12">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div class="lg:col-span-4">
          <h2 class="text-base font-semibold leading-7 text-indigo-500">
            Frequently asked questions
          </h2>
          <p class="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
            Everything you need to know
          </p>
        </div>
        <div class="-mb-4 space-y-12 lg:col-span-8 xl:col-span-7 xl:col-start-6">
          <section>
            <h3 class="text-sm font-semibold leading-7 text-slate-400">
              General
            </h3>
            <dl class="mt-2 divide-y divide-slate-100">
              <details class="group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What is the difference between civil law and criminal law?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      Civil law primarily deals with private disputes between
                      individuals or entities, seeking compensation or
                      resolution of conflicts. On the other hand, criminal law
                      focuses on offenses against the state, prosecuting
                      individuals for actions deemed harmful to society, with
                      potential penalties including fines, imprisonment, or
                      both.
                    </p>
                  </div>
                </div>
              </details>
              <details class="group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What is the purpose of a will in estate planning?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      A will is a legal document that outlines an individual's
                      wishes regarding the distribution of their assets after
                      death. In estate planning, a will serves to designate
                      heirs, specify the allocation of property, and,
                      importantly, appoint guardians for minor children,
                      ensuring that the deceased's intentions are honored.
                    </p>
                  </div>
                </div>
              </details>
            </dl>
          </section>
          <section>
            <h3 class="text-sm font-semibold leading-7 text-slate-400">
              Criminal
            </h3>
            <dl class="mt-2 divide-y divide-slate-100">
              <details class="group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What is the concept of "innocent until proven guilty" in
                  criminal law?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      "Innocent until proven guilty" is a fundamental principle
                      in criminal law, emphasizing that every accused person is
                      presumed innocent unless proven otherwise in a court of
                      law. This places the burden of proof on the prosecution,
                      requiring them to provide evidence beyond a reasonable
                      doubt to secure a conviction.
                    </p>
                  </div>
                </div>
              </details>
              <details class="group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What is the role of a defense attorney in a criminal case?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      A defense attorney is crucial in a criminal case,
                      representing the accused and safeguarding their rights.
                      This includes providing legal counsel, investigating the
                      case, cross-examining witnesses, and developing a defense
                      strategy. The defense attorney works to ensure a fair
                      trial and may negotiate plea deals if in the best interest
                      of the client.
                    </p>
                  </div>
                </div>
              </details>
              <details class="group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What is the purpose of intellectual property law?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      Intellectual property law safeguards the creations of the
                      mind, including inventions, artistic works, and brand
                      identifiers. It comprises patent, copyright, trademark,
                      and trade secret laws, offering creators exclusive rights
                      to their innovations and fostering innovation by providing
                      legal protection against unauthorized use or reproduction.
                    </p>
                  </div>
                </div>
              </details>
              <details class="group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What is the difference between a misdemeanor and a felony?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      Misdemeanors are less serious crimes, typically punishable
                      by fines, probation, or less than a year in jail. Felonies
                      are more severe offenses, often involving violence or
                      significant harm, and carry heavier penalties, including
                      imprisonment for over a year, fines, or even capital
                      punishment in some jurisdictions.
                    </p>
                  </div>
                </div>
              </details>
            </dl>
          </section>
          <section>
            <h3 class="text-sm font-semibold leading-7 text-slate-400">
              Licensing
            </h3>
            <dl class="mt-2 divide-y divide-slate-100">
              <details class="group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What does the term "due process" mean in legal contexts?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      Due process ensures that individuals receive fair
                      treatment and protection of their legal rights within the
                      legal system. This includes the right to notice, a fair
                      hearing, and the opportunity to be heard before the
                      government takes any action that could deprive them of
                      life, liberty, or property.
                    </p>
                  </div>
                </div>
              </details>
              <details class="group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What is the significance of the Miranda rights?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      The Miranda rights protect individuals' Fifth Amendment
                      rights against self-incrimination during police
                      interrogations. When arrested or in custody, individuals
                      must be informed of their right to remain silent and their
                      right to an attorney. Failure to do so may render any
                      subsequent statements inadmissible in court.
                    </p>
                  </div>
                </div>
              </details>
              <details class="group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What is the purpose of environmental law?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      Environmental law addresses the legal framework governing
                      the protection and preservation of the environment. It
                      regulates activities that may impact air and water
                      quality, wildlife, and natural resources, aiming to
                      prevent pollution, conserve ecosystems, and promote
                      sustainable practices.
                    </p>
                  </div>
                </div>
              </details>
              <details class="group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What is the difference between a patent and a copyright?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      A patent grants exclusive rights to inventors for their
                      inventions or discoveries, providing protection for a
                      limited time. Copyright, on the other hand, protects
                      original works of authorship, such as literary, artistic,
                      and musical creations, giving creators exclusive rights
                      for a specified duration.
                    </p>
                  </div>
                </div>
              </details>
              <details class="group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What is the role of the Supreme Court in the legal system?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      The Supreme Court, often the highest appellate court in a
                      country, interprets the constitution and laws, ensuring
                      consistency in legal interpretation. It has the power of
                      judicial review to determine the constitutionality of laws
                      and government actions.
                    </p>
                  </div>
                </div>
              </details>
              <details class="group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What is the purpose of immigration law?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      Immigration law governs the entry, stay, and rights of
                      foreign nationals in a country. It establishes criteria
                      for visas, refugee status, and citizenship, addressing
                      issues related to national security, economic needs, and
                      humanitarian concerns.
                    </p>
                  </div>
                </div>
              </details>
            </dl>
          </section>
          <section>
            <h3 class="text-sm font-semibold leading-7 text-slate-400">
              Power of Attorney
            </h3>
            <dl class="mt-2 divide-y divide-slate-100">
              <details class="group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What is the difference between a power of attorney and a
                  guardianship?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      A power of attorney is a legal document that grants
                      someone the authority to make decisions on behalf of
                      another person, typically related to finances or
                      healthcare. Guardianship, on the other hand, involves a
                      court appointing someone to make decisions for an
                      incapacitated individual who cannot do so themselves.
                    </p>
                  </div>
                </div>
              </details>
              <details class="mb-10 group py-4 marker:content-['']">
                <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  What is the purpose of product liability law?
                  <svg
                    class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 12H6"></path>
                    <path class="group-open:hidden" d="M12 6v12"></path>
                  </svg>
                </summary>
                <div class="pb-6 pt-6">
                  <div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      Product liability law holds manufacturers, distributors,
                      and sellers responsible for placing defective or dangerous
                      products into the hands of consumers. It provides a legal
                      recourse for individuals who suffer injuries or damages
                      due to faulty products.
                    </p>
                  </div>
                </div>
              </details>
            </dl>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Faq;
