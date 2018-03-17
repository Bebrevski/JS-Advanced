function move(direction) {
    let selected = $('#towns option:selected');
    if (direction === -1) {
        selected.insertBefore(selected.prev());

    } else if (direction === 1) {
        selected.insertAfter(selected.next());
    }
}