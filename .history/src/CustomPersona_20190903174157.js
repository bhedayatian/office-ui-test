
import {
    IPersonaSharedProps,
    Persona,
    PersonaInitialsColor,
    PersonaSize,
    Stack,
    Fabric
  } from 'office-ui-fabric-react';
  
  const examplePersona= {
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm'
  };
  
  const personaWithInitials = {
    ...examplePersona,
    text: 'Maor Sharett',
    imageInitials: 'MS'
  };
  
  class CustomPersona extends React.Component {
      render() {
        return (
            <div>
            test
    
            </div>
        );
        }
  };

  export default CustomPersona;