const serverURL = "http://localhost:8000";

export async function handleSubmit(event) {
  event.preventDefault();

  const formText = document.getElementById("name").value;

  try {
    const response = await fetch(`${serverURL}/analyze`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: formText }),
    });
    console.log("response", response);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    const sentenceList = data.sentence_list
      .map(
        (sentence) => `
        <div>
          <p><strong>Text:</strong> ${sentence.text}</p>
          <p><strong>Sentiment:</strong> ${sentence.score_tag}</p>
          <p><strong>Entities:</strong> ${sentence.sentimented_entity_list
            .map((entity) => entity.form)
            .join(", ")}</p>
          <p><strong>Concepts:</strong> ${sentence.sentimented_concept_list
            .map((concept) => concept.form)
            .join(", ")}</p>
        </div>
      `
      )
      .join("");

    document.getElementById("results").innerHTML = `
        <strong>Sentences:</strong>
        ${sentenceList}
        <strong>Status:</strong> ${data.status.msg} (Code: ${data.status.code})
      `;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("results").innerText =
      "Failed to retrieve data from server";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("urlForm");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
});
