fetch('characters.json')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('characters-container');
        container.innerHTML = ''; // Clear loading text
        data.forEach(character => {
            const div = document.createElement('div');
            div.className = 'character';
            div.innerHTML = `
                <strong>Character:</strong> ${character.character}<br>
                <strong>Pinyin:</strong> ${character.pinyin}<br>
            `;
            container.appendChild(div);
        });
    })
    .catch(error => {
        document.getElementById('characters-container').innerText =
            'Failed to load characters: ' + error.message;
});
