import DataStore from 'flux/stores/DataStore.js'

class Kontakt extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('kontakt');

        return (
            <div>
                <h2>Homepage template</h2>
                <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                <div>{pageData.content.rendered}</div>
            </div>
        );
    }
}

export default Kontakt;
