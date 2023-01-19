const markAsRead = document.getElementById('mark-as-read');

const markAsReadFunc = function() {
    // Removes bullet points
    const bulletPoints = Array.from(document.getElementsByClassName('bullet-point'));
    bulletPoints.forEach(bulletPoint => {
        bulletPoint.style.display = 'none';
    })
    // Removes light blue background
    const unreadNotis = Array.from(document.getElementsByClassName('unread'));
    unreadNotis.forEach(unreadNoti => {
        unreadNoti.classList.remove('unread');
    })
    // Sets unread notifications count to 0
    document.getElementById('number-noti').innerHTML = '0';
}

markAsRead.addEventListener('click', markAsReadFunc);