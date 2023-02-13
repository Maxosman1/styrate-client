import Header from "../Header/Header";
import { PageFormatContainer } from "./PageFormat.styled";

const PageFormat = ({children}) => {
    return (
        <PageFormatContainer className="center">
            <Header/>
            <div className="pageFormat inner">
                {
                    children
                }
            </div>
        </PageFormatContainer>
    );
}

export default PageFormat;