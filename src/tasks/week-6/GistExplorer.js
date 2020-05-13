import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Grid } from 'semantic-ui-react';
import GistsList from './components/GistsList';
import GistContent from './components/GistContent';
import { useSelector } from 'react-redux';

export default function GistExplorer() {
    const codeString = useSelector(state => state.selectedGist)
    return (
        <Segment>
            <Grid divided>
                <Grid.Column width={6}>
                    <GistsList />
                </Grid.Column>
                <Grid.Column width={10}>
                    {(codeString) ? <GistContent /> : <h3>Chose a gist</h3>}
                </Grid.Column>
            </Grid>
        </Segment>
    )
}
