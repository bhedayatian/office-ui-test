import React from 'react';
import {
    IPersonaSharedProps,
    Persona,
    PersonaInitialsColor,
    PersonaSize,
    Stack,
    Fabric
  } from 'office-ui-fabric-react';
  
  const examplePersona= {
    primaryText:'Mary Lam',
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
                        primaryText: {color: 'RED', textDecoration: 'underline'},
                        root: { margin: '0 0 10px 0' } 
                    }}
            />
    
            </div>
        );
        }
  };

  export default CustomPersona;