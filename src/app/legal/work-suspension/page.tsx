export default function WorkSuspensionPage() {
  return (
    <div className="pl-10">
      <h1
        className="text-3xl font-semibold mb-10 text-gray-900"
        style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
      >
        WebMaak Work Suspension Policy <br />
        <span className="font-normal text-xl">(Updated November 2025)</span>
      </h1>

      <h2
        className="text-gray-700 mb-2 text-xl font-bold"
        style={{
          fontFamily: "Bricolage Grotesque, sans-serif",
          color: "#0175e4",
        }}
      >
        1. Purpose
      </h2>
      <p
        className="text-gray-700 mb-6 text-xl"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        This policy outlines how and when{" "}
        <span className="font-bold">WebMaak Creative LLP</span> (“WebMaak”) may
        temporarily
        <span className="font-bold"> pause or suspend </span> a project. It
        applies when progress is blocked due to
        <span className="font-bold"> pending payments</span>,{" "}
        <span className="font-bold"> missing feedback</span>,
        <span className="font-bold"> unclear scope</span>, or{" "}
        <span className="font-bold"> prolonged client inactivity</span>. The
        goal is to ensure{" "}
        <span className="font-bold">
          {" "}
          transparency, fairness, and accountability
        </span>{" "}
        for both parties.
      </p>

      <h2
        className="text-gray-700 mb-2 text-xl font-bold"
        style={{
          fontFamily: "Bricolage Grotesque, sans-serif",
          color: "#0175e4",
        }}
      >
        2. When Work May Be Suspended
      </h2>

      <p
        className="text-gray-700 mb-2 text-xl"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <span className="font-bold">WebMaak</span> reserves the right to{" "}
        <span className="font-bold">pause any ongoing work</span> in the
        following cases:
      </p>

      <ol
        className="list-decimal pl-6 space-y-2 mb-6 text-gray-700 text-xl"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <li>
          <span className="font-bold">Payment Delays:</span>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>
              If any invoice or milestone payment remains unpaid{" "}
              <span className="font-bold">beyond the 5-day grace period</span>,
              all ongoing work will be{" "}
              <span className="font-bold">paused automatically</span> as per the{" "}
              <span className="font-bold">Payment Terms & Conditions</span>.
            </li>
            <li>
              Work resumes{" "}
              <span className="font-bold">only after full payment</span> is
              received.
            </li>
          </ul>
        </li>

        <li>
          <span className="font-bold">Delayed Feedback or Approvals:</span>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>
              If the client fails to provide required feedback, content, or
              approval for more than{" "}
              <span className="font-bold">7 business days</span>, the project
              may be placed <span className="font-bold">on temporary hold</span>{" "}
              until communication resumes.
            </li>
          </ul>
        </li>

        <li>
          <span className="font-bold">Unclear or Changing Scope:</span>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>
              If there’s a{" "}
              <span className="font-bold">scope conflict or major change</span>{" "}
              that affects project direction, work will pause until the{" "}
              <span className="font-bold">Change Request</span> is formally
              approved as per the{" "}
              <span className="font-bold">
                Project Scope & Change Request Policy
              </span>
              .
            </li>
          </ul>
        </li>
      </ol>

      <h2
        className="text-gray-700 mb-2 text-xl font-bold"
        style={{
          fontFamily: "Bricolage Grotesque, sans-serif",
          color: "#0175e4",
        }}
      >
        3. During Suspension
      </h2>

      <ul
        className="list-disc pl-12 space-y-2 mb-6 text-gray-700 text-xl"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <li>
          All{" "}
          <span className="font-bold">
            project work, communication, and scheduling
          </span>{" "}
          are temporarily halted.
        </li>
        <li>
          <span className="font-bold">WebMaak</span> will{" "}
          <span className="font-bold">notify the client in writing</span> before
          initiating or confirming suspension.
        </li>
        <li>
          Suspension does <span className="font-bold">not terminate</span> the
          project; it only <span className="font-bold">pauses progress</span>{" "}
          until the issue is resolved.
        </li>
      </ul>

      <h2
        className="text-gray-700 mb-2 text-xl font-bold"
        style={{
          fontFamily: "Bricolage Grotesque, sans-serif",
          color: "#0175e4",
        }}
      >
        4. Resuming Work
      </h2>

      <ul
        className="list-disc pl-12 space-y-2 mb-6 text-gray-700 text-xl"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <li>
          Work resumes{" "}
          <span className="font-bold">
            once pending payments, feedback, or approvals are cleared
          </span>
          .
        </li>
        <li>
          Project timelines may be <span className="font-bold">revised</span>{" "}
          based on team availability and workload.
        </li>
        <li>
          If a project remains suspended for over{" "}
          <span className="font-bold">30 days</span>, a{" "}
          <span className="font-bold">reactivation fee</span> and{" "}
          <span className="font-bold">new delivery timeline</span> may apply.
        </li>
        <li>
          Projects inactive for more than{" "}
          <span className="font-bold">60 days</span> without client response may
          be marked <span className="font-bold">closed</span>, requiring a{" "}
          <span className="font-bold">new agreement</span> to continue.
        </li>
      </ul>

      <h2
        className="text-gray-700 mb-2 text-xl font-bold"
        style={{
          fontFamily: "Bricolage Grotesque, sans-serif",
          color: "#0175e4",
        }}
      >
        5. Data Retention
      </h2>

      <ul
        className="list-disc pl-12 mb-6 space-y-2 text-gray-700 text-xl"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <li>
          <span className="font-bold">WebMaak</span> securely retains{" "}
          <span className="font-bold">
            suspended project data for up to 45 days
          </span>
          .
        </li>
        <li>
          After that period, the project may be{" "}
          <span className="font-bold">archived or removed</span> from active
          storage.
        </li>
        <li>
          <span className="font-bold">Restoring archived data</span> later may
          involve a small{" "}
          <span className="font-bold">re-upload or reactivation cost</span>.
        </li>
      </ul>

      <h2
        className="text-gray-700 mb-2 text-xl font-bold"
        style={{
          fontFamily: "Bricolage Grotesque, sans-serif",
          color: "#0175e4",
        }}
      >
        6. Relationship with Other Policies
      </h2>

      <ul
        className="list-disc pl-12 mb-6 space-y-2 text-gray-700 text-xl"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <li>
          This policy functions in alignment with:
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>
              <span className="font-bold">Payment Terms & Conditions</span>{" "}
              <em>(for financial milestones)</em>
            </li>
            <li>
              <span className="font-bold">
                Project Scope & Change Request Policy
              </span>{" "}
              <em>(for scope-related holds)</em>
            </li>
          </ul>
        </li>

        <li>
          The <span className="font-bold">Stop-Work Clause</span> from the
          Payment Policy{" "}
          <span className="font-bold">automatically applies here</span>.
        </li>

        <li>
          Suspension is always a{" "}
          <span className="font-bold">temporary safeguard, not a penalty</span>.
        </li>
      </ul>

      <h2
        className="text-gray-700 mb-2 text-xl font-bold"
        style={{
          fontFamily: "Bricolage Grotesque, sans-serif",
          color: "#0175e4",
        }}
      >
        7. Agreement & Enforcement
      </h2>
      <p
        className="text-gray-700 mb-6 text-xl"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        By engaging WebMaak’s services, the client{" "}
        <span className="font-bold">acknowledges and agrees</span>
        to this <span className="font-bold">Work Suspension Policy</span>,
        ensuring
        <span className="font-bold"> timely collaboration </span> and
        <span className="font-bold"> structured project management.</span>
      </p>

      <p
        className="text-gray-800 mb-4 font-semibold text-lg"
        style={{ fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}
      >
        For any additional queries, please contact{" "}
        <a href="tel:+916289972924" className="text-blue-600 hover:underline">
          +91 62899 72924
        </a>{" "}
        or{" "}
        <a
          href="mailto:hello@webmaak.com"
          className="text-blue-600 hover:underline"
        >
          hello@webmaak.com
        </a>
        .
      </p>
    </div>
  );
}
