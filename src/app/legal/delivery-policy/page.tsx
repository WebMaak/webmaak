export default function DeliveryPolicyPage() {
  return (
    <section className="bg-white pl-10">
      <h1
        className="text-3xl font-semibold mb-10 text-gray-900"
        style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
      >
        Delivery, Revisions & Final Handover Policy
      </h1>

      <p
        className="text-gray-700 mb-6"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        Sets expectations for communication, meeting schedules, and project
        collaboration to ensure alignment and efficiency throughout the project
        lifecycle.
      </p>

      <ul
        className="list-disc pl-6 space-y-2 text-gray-800 "
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <li>Communication channels will be predefined.</li>
        <li>Clients are expected to provide timely feedback.</li>
        <li>Regular project updates ensure smooth progress.</li>
      </ul>
    </section>
  );
}
