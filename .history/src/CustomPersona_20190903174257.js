
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
            
            <Persona {...examplePersona} 
                text="Kat Larrson" 
                size={PersonaSize.size24} 
                styles={{
                        primaryText: {color:"red", textDecoration: "underline"},
                        root: {
                        selectors: {
                            ":hover": {
                            selectors: {".ms-Persona-primaryText": {color:"orange"}}
                            }
                        }
                        }
                    }}
            />
    
            </div>
        );
        }
  };

  export default CustomPersona;