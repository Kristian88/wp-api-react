import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('forside');

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

export default Home;
