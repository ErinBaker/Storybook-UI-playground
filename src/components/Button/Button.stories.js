import React from 'react';
import Button from './Button';

export default {
  title: 'Application/Component Library/Button',
  component: Button,
    argTypes: {
      size: {
        control: 'text',
      }
    }
  } 


const Template = (args) => <Button {...args}></Button> 

export const Default = Template.bind({})
Default.args = {
  size: 'md',
  label: 'Some text'
}

export const Small = Template.bind({})
Default.args = {
  size: 'sm'
}

export const Medium = Template.bind({})
Medium.args = {
    size: 'md'    
}

export const Large = Template.bind({})
Large.args = {
    size: 'lg'    
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
    size: 'xl'    
}