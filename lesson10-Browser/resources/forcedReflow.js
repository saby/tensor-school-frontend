function toggleSizeSlow() {
    const items = document.getElementsByClassName('listItem');

    Array.from(items).forEach((item, index) => {
        item.classList.toggle('big');
        item.classList.toggle('small');
        console.log(`Высота элемента ${index}: ${item.clientHeight}`);
    });
}

function toggleSizeFast() {
    const items = document.getElementsByClassName('listItem');

    Array.from(items).forEach((item, index) => {
        item.classList.toggle('big');
        item.classList.toggle('small');
    });

    Array.from(items).forEach((item, index) => {
        console.log(`Высота элемента ${index}: ${item.clientHeight}`);
    });
}

function toggleSizeSuperFast() {
    const items = document.getElementsByClassName('listItem');

    Array.from(items).forEach((item, index) => {
        item.classList.toggle('big');
        item.classList.toggle('small');
    });

    setTimeout(() => {
        Array.from(items).forEach((item, index) => {
            console.log(`Высота элемента ${index}: ${item.clientHeight}`);
        });
    });
}

function createList() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 5000; i++) {
        const item = document.createElement('div');
        item.classList.add('listItem', 'small');
        item.textContent = i;
        fragment.appendChild(item);
    }

    document.body.appendChild(fragment);
}

createList();

document.getElementById('toggleSlow').addEventListener('click', toggleSizeSlow);
document.getElementById('toggleFast').addEventListener('click', toggleSizeFast);
document.getElementById('toggleSuperFast').addEventListener('click', toggleSizeSuperFast);