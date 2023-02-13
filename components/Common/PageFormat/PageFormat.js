import Header from "../Header/Header";
import { PageFormatContainer } from "./PageFormat.styled";

const PageFormat = ({children}) => {
    return (
        <PageFormatContainer>
            <div className="pageFormat inner">
                <Header/>
                {
                    children
                }
            </div>
        </PageFormatContainer>
    );
}

export default PageFormat;