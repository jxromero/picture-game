import styled from 'styled-components';
import Picture from './picture';

function Pictures({ pictures }) {
    const PictureList = styled.ul`
        display: flex;
        width: 520px;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: space-between;
        margin-bottom: 10px;
    `;
    return (
        <PictureList>
            {
                pictures?.map((picture, key) => 
                    <Picture src={picture} key={key} />
                )
            }
        </PictureList>
    )
}

export default Pictures;