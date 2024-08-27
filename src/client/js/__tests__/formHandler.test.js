import "@testing-library/jest-dom";
import { handleSubmit } from "../formHandler";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        sentence_list: [
          {
            text: "Sample sentence",
            score_tag: "P",
            sentimented_entity_list: [{ form: "Entity1" }],
            sentimented_concept_list: [{ form: "Concept1" }],
          },
        ],
        status: { msg: "Success", code: 200 },
      }),
  })
);

describe("handleSubmit", () => {
  it("should handle form submission and update the DOM", async () => {
    document.body.innerHTML = `
      <form id="urlForm">
        <input id="name" value="https://google.com" />
        <button type="submit">Submit</button>
      </form>
      <div id="results"></div>
    `;

    const form = document.getElementById("urlForm");
    form.addEventListener("submit", handleSubmit);

    form.dispatchEvent(new Event("submit"));

    await new Promise((resolve) => setTimeout(resolve, 0));

    const results = document.getElementById("results");
    expect(results).toHaveTextContent("Sample sentence");
    expect(results).toHaveTextContent("Sentiment: P");
    expect(results).toHaveTextContent("Entities: Entity1");
    expect(results).toHaveTextContent("Concepts: Concept1");
    expect(results).toHaveTextContent("Status: Success (Code: 200)");
  });
});
