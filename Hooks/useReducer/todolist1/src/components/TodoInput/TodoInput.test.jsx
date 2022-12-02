import { render, screen, waitFor } from '@testing-library/react';
import TodoInput from './TodoInput';
import userEvent from '@testing-library/user-event';


// Tres tipos de tests, realmente 4
// Types -> TS te lo evita
// Unit test -> Comprueba el funcionamiento de un componente o grupo de componentes pequeño
// Integration test -> Comprueba una parte de la aplicación
// E2E


// Test pattern
// AAA
// 1. Arrange - configuracion
// 2. Act - acciones
// 3. Assert - aserciones

// Tres tipos de queries en RTL
// 1. get... -> sync
// 2. find... -> async
// 3. query -> puede ser null

// RTL
// Arrange -> render(</>)

// Act
// get/find/query && userEvent.click/type

// Assert
// expect && waitFor(() => {}

const renderTodoInput = ({ originalValue } = {}) => {
  const user = userEvent.setup();
  const { container } = render(<TodoInput oldName={originalValue ?? ''} />);


  const getInput = () => screen.getByRole('textbox');
  const findInput = async () => await screen.findByRole('textbox');
  const getInputValue = () => getInput().value;
  const findInputValue = async () => {
    const input = await findInput();
    return input.value;
  };

  return {
    user,
    container,
    getInput,
    findInput,
    getInputValue,
    findInputValue,
  };

};


describe('TodoInput', () => {
  describe('render', () => {
    it('should render OK', () => {
      const { container } = renderTodoInput();

      expect(container).toBeInTheDocument();
    });

    it('should render OK II', () => {
      const { container } = renderTodoInput();
      expect(container).toMatchSnapshot();
    });

    it('should show a value when the input is filled', () => {
      // Arrange
      const TEXT_VALUE = 'EDUARDO';
      const { getInputValue } = renderTodoInput({ originalValue: TEXT_VALUE });

      // Act
      // coger valor del input
      const inputValue = getInputValue();

      // Assert
      expect(inputValue).toBe(TEXT_VALUE);
    });

    it('should render an input of type text', () => {
      // Arrange
      const { getInput } = renderTodoInput();

      // Act
      const input = getInput();

      // Assert
      expect(input).toHaveAttribute('type', 'text');
    });
  });

  // fireEvent & userEvent
  describe('events', () => {
    describe('handleChange', () => {
      it('should change the value of the input when we fill the component', async () => {
        // Arrange - We render the component without a value
        const TEXT_TO_TEST = 'TEST';
        const { user, findInput, findInputValue } = renderTodoInput();

        // Act
        // We change the value to 'TEST'
        const input = await findInput();
        await user.type(input, TEXT_TO_TEST);

        // Assert
        // We check that the value of the input equals 'TEST'
        await waitFor(async () => {
          const inputValue = await findInputValue();
          expect(inputValue).toBe(TEXT_TO_TEST);
        });
      });

      it.todo('should remove the value "TEST" of the input when we clear the component');
    });

    it.todo('should remove the value of the component when we submit the form value');
  });
});