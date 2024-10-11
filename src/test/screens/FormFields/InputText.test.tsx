import { render, screen, userEvent } from '@testing-library/react-native';
import 'react-native';
import React from 'react';
import {it, describe} from '@jest/globals';
import { InputText } from '../../../screens/FormFields/InputText';
import { UserEventInstance } from '@testing-library/react-native/build/user-event/setup';

describe('InputText', () => {
    let user: UserEventInstance;

    beforeEach(() => {
        user = userEvent.setup();
    });

    it('should show a required label', () => {
        render(<InputText label='Text' value='' onInputChange={jest.fn()} required/>);
    
        expect(screen.getByRole('text', { name: 'Text*'})).toBeDefined();
    });

    it('should show a non-required label', () => {
        render(<InputText label='Text' value='' onInputChange={jest.fn()} required={false}/>);
    
        expect(screen.getByLabelText('Text')).toBeDefined();
    });

    it('should load a value defined', () => {
        render(<InputText label='Text' value='Loaded value' onInputChange={jest.fn()} required={false}/>);
    
        expect(screen.getByLabelText('Text').props.value).toEqual('Loaded value');
    });

    it('should call the onInputChange when typing on the input text field', async () => {
        const onInputChange = jest.fn();
        render(<InputText label='Text' value='' onInputChange={onInputChange} required={true}/>);
    
        await user.type(screen.getByTestId('TextInput.Text'), 'Text');

        expect(onInputChange).toHaveBeenLastCalledWith('t');
    });
});