import {graphql, useStaticQuery} from 'gatsby';

const useSeo = (props) => {
    const data = useStaticQuery(graphql`
        query {
            datoCmsSite {
                globalSeo {
                titleSuffix
                siteName
                fallbackSeo {
                    description
                    title
                }
                }
            }
        }
    `);
    return data.datoCmsSite.globalSeo;
}
 
export default useSeo;

