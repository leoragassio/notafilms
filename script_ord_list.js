document.addEventListener("DOMContentLoaded", function() {
      const tableBody = document.getElementById("tableBody");
      const rows = tableBody.getElementsByTagName("tr");
    
      for (let i = 0; i < rows.length; i++) {
        const cell = rows[i].getElementsByTagName("td")[0];
        cell.textContent = (i + 1).toString();
      }
    });