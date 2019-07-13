function addToChecklist() {
    $('#js-shopping-list-form').on('submit', function (event) {
        event.preventDefault();
        const userGroceryItemAdded = $('#shopping-list-entry').val()
        $('.shopping-list').append(`<li>
    <span class="shopping-item">${userGroceryItemAdded}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`)
    });
    
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        const currentTarget = $(this).closest('li').find('.shopping-item');
        currentTarget.toggleClass('shopping-item__checked')

    });

    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        const currentTarget = $(this).closest('li')
        currentTarget.remove();

    });
}





$(addToChecklist)
//$(strikeThroughItem)