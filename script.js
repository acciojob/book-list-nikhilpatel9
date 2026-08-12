//your JS code here. If required.

const btn = document.getElementById("submit").addEventListener('click', () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;
    const body = document.getElementById("book-list");
    
    const newtr = document.createElement("tr");
    
    const td1 = document.createElement('td');
    td1.textContent = `${title}`;
    
    const td2 = document.createElement('td');
    td2.textContent = `${author}`;
    
    const td3 = document.createElement('td');
    td3.textContent = `${isbn}`;
    
    const td4 = document.createElement('td');
    const bt = document.createElement('button');
    bt.textContent = 'Delete';
    bt.addEventListener('click', () => {
        newtr.remove();
    });
	bt.className="delete";
    td4.appendChild(bt);
    
    newtr.appendChild(td1);
    newtr.appendChild(td2);
    newtr.appendChild(td3);
    newtr.appendChild(td4);
    
    body.appendChild(newtr);
});