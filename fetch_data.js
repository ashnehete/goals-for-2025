const core = require('@actions/core')
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function fetchData() {
    try {
        const databaseId = process.env.NOTION_HABITS_DATABASE_ID;
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                "and": [
                    {
                        "property": "Created time",
                        "date": {
                            "on_or_after": "2025-01-01"
                        }
                    }
                ]
            },
            sorts: [
                {
                    "property": "Created time",
                    "direction": "ascending"
                }
            ]
        });

        // Process exercise data
        const exerciseData = response.results.map((page) => (
            page.properties.Swimming.checkbox || page.properties.Gym.checkbox || page.properties.Badminton.checkbox
        ));

        const processedData = {
            exercise: {
                calendar: exerciseData
            }
        }

        // Convert data to JSON string
        const jsonData = JSON.stringify(processedData, null, 2);

        // Set output for use in subsequent steps
        core.setOutput('data', jsonData);

    } catch (error) {
        console.error('Error fetching data:', error);
        core.setFailed(error.message);
    }
}

fetchData();
