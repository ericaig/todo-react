import PropTypes from 'prop-types';

const TodoItemInterface = PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    order: PropTypes.number.isRequired,
})

export default TodoItemInterface