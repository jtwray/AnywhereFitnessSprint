import React from 'react'
import {shallow} from 'enzyme'
import {ClassList} from './classes/ClassList';
import axios from 'axios';

jest.mock( 'axios' );
describe( 'ClassList component', () => {
    describe( 'when rendered', () => {
        it( 'should fetch a list of classes', () => {
            const getSpy=jest.spyOn( axios, 'get' );
            const classListInstance=shallow( <ClassList /> );
            expect( getSpy ).toBeCalled();
        } )
    } )
} )