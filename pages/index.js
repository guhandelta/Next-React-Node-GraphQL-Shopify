import { EmptyState, Layout, Page } from '@shopify/polaris'

function index() {
    return (
        <Page>
            <Layout>
                <EmptyState
                    heading="Manage your inventory transfers"
                    action={{ content: 'Select Products' }}
                    image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                >
                    <p>Select products</p>
                </EmptyState>
            </Layout>
        </Page>
    )
}

export default index

