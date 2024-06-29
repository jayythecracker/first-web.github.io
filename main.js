document.addEventListener('DOMContentLoaded', function() {
  const tableBody = document.getElementById('todo-table-body');
  const menuButton = document.getElementById('menu-button');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const loading = document.getElementById('loading');

  loading.classList.remove('hidden');
  // Fetch data and populate table
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      const todos = response.data;
    
      todos.forEach((todo, index) => {
        const row = document.createElement('tr');
        
        if (index % 2 === 0) {
          row.classList.add('bg-gray-100');
        }

        row.innerHTML = `
          <td class="px-4 py-2 border-b">${todo.id}</td>
          <td class="px-4 py-2 border-b">${todo.title}</td>
          <td class="px-4 py-2 border-b text-center">${todo.completed ? '✅' : '❌'}</td>
        `;

        tableBody.appendChild(row);
      });
      loading.classList.add('hidden');
    
    })
    .catch(error => {
      loading.innerText=error;
    });

  // Toggle dropdown menu
  menuButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('hidden');
  });
});
