import styled from "styled-components";

function Picture({ src }) {
    const List = styled.li`
        background: url(${props => props.theme.src});
        width: 250px;
        height: 250px;
        background-size: cover;
        background-position: center;
        margin-bottom: 4px;
        border: 4px solid #fff;
    `;
    const Image = styled.img``;

    return (
        <List theme={{src: src}}></List>
    )
}

export default Picture;