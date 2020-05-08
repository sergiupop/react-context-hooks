import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    
    return (
        <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                <li style={{ background: theme.ui }}>Book1</li>
                <li style={{ background: theme.ui }}>Book2</li>
                <li style={{ background: theme.ui }}>Book3</li>
            </ul>
        </div>
    )
}

/*class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
                <ul>
                    <li style={{ background: theme.ui }}>Book1</li>
                    <li style={{ background: theme.ui }}>Book2</li>
                    <li style={{ background: theme.ui }}>Book3</li>
                </ul>
            </div>
        )
    }
}*/

export default BookList;