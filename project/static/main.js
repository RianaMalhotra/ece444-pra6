document.querySelectorAll(".delete-entry").forEach((button) => {
  button.addEventListener("click", async () => {
    if (!window.confirm("Delete this blog entry?")) return;
    const postId = button.dataset.postId;
    try {
      const response = await fetch(`/delete/${postId}`);
      const result = await response.json();
      if (!response.ok || result.status !== 1) {
        alert(result.message || "Could not delete the entry.");
        return;
      }
      button.closest(".entry").remove();
    } catch (error) {
      console.error(error);
      alert("Could not delete the entry.");
    }
  });
});
