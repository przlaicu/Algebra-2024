import PropTypes from 'prop-types';

export default function Comment(props) {
    return (
        <div className="comment">
            <Author author={props.author} />
            <p>{props.text}</p>
            <p>Autor: {props.author.name}</p>
            <small>{formatDate(props.date)}</small>
        </div>
    );
}

function Author(props) {
    return <img id='avatar' src={props.author.url} alt={props.author.name}></img>
}

// Function tu format date
function formatDate(date) {
    return date?.toLocaleDateString('en-US');
}

Comment.propTypes = {
    text: PropTypes.string,
    date: PropTypes.any,
    author: PropTypes.object
};

Comment.defaultProps = {
    text: 'Unknow',
    date: new Date(),
    author: {
        name: 'Unknow Author',
        url: 'https://placeholder.com/100x100',
    }
}