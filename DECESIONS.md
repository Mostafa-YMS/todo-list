## Design decisions and improvements

- using props instead of context because it is a small project with low components hirarchy.

### Listing Todos:
- Preferred not to use memo because TodoList isn't taking any props from App.
- Preferred to keep todos logic inside TodoList component to be reusable.

### TodoList refactor:
- separated logic from todo list to todo page and used memo to memoize todo list.

### Add to do:
- Could have used formik for better form state and errors management but preferred not to use more packages for just one input.

### final refactor
- used load more button instead of load on scroll to decrease function calls.