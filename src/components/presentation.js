import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';
import { ScrollElement } from 'react-scroll';

const StyledPresentation = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        max-width: 70%;
        text-align: center;
    }
`;

const Presentation = ({ intl, ...rest }) => (
    <StyledPresentation {...rest}>
        <p>
            Sea oporteat hendrerit scripserit ea. His id diam dolor ridens. Ullum veniam
            ei ius. Iuvaret gubergren consequuntur at nec. Eu qui dicam meliore
            conclusionemque, has vidisse feugiat offendit id, duo prima pericula cu.
        </p>
        <p>
            Mea nostrud vivendum vulputate in. Vix aperiam similique ad. Cu mel omnis
            tritani, in nam blandit indoctum, utinam viderer atomorum ex duo. An qui probo
            posidonium, his et ferri molestie. Has an gubergren torquatos, ex sea velit
            diceret persequeris.
        </p>
    </StyledPresentation>
);

export default ScrollElement(injectIntl(Presentation));
