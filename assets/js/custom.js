function toggleDropdown(element) {
  var dropdown = element.nextElementSibling; // Select the next sibling element (the dropdown content)
  if (dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
  } else {
    dropdown.classList.add('show');
  }
}