import React, { Component } from 'react';
import OpenAI from 'openai';

interface AnimalFactStates {
    fact: string | null;
    loading: boolean;
    error: string | null;
    animal: string | null;
}

interface AnimalFactProps {
    apiKey: string;
    apiURL: string;
    render: (
        fact: string | null,
        loading: boolean,
        error: string | null,
        animal: string | null,
        fetchFact: (animal: string) => void
    ) => React.ReactNode;
}

export class AnimalFact extends Component<AnimalFactProps, AnimalFactStates> {
    private client: OpenAI;
    
    constructor(props: AnimalFactProps) {
        super(props);

        this.client = new OpenAI({
            baseURL: props.apiURL,
            apiKey: props.apiKey,
            dangerouslyAllowBrowser: true
        });
        
        this.state = {
            fact: 'Press a Button to be enlightened',
            loading: false,
            error: null,
            animal: null
        };
    }
    cleanText = (text: string) => {
        return text
        .replace(/^Fetched fact:\s*/i, (match) => match ? '' : '')  
        .replace(/\\boxed\{/, '')            
        .replace(/\\boxed\{[^}]*\}$/, '')
        .trim();
    }
    
    fetchFact = async (animal: string) => {
        this.setState({
            loading: true,
            error: null,
            animal: animal
        });
        
        try {
            const chatCompletion = await this.client.chat.completions.create({
                model: "deepseek/deepseek-r1-zero:free", // Using DeepSeek-R1 as mentioned in the documentation
                messages: [
                    {
                        role: "user",
                        content: `Give me some interesting facts about ${animal} in paragraph style. Don't create a heading Keep it to 4-5 lines and dont add any styling.`,
                    },
                ],
                max_tokens: 512,
            });
            
            // Get the response content from the completion
            const factText = this.cleanText(chatCompletion.choices[0]?.message.content || "No fact returned");
            
            this.setState({
                fact: factText,
                loading: false
            });
            
            console.log("Fetched fact:", factText);
            
        } catch (error) {
            console.error("Error fetching animal fact:", error);
            this.setState({
                error: error instanceof Error ? error.message : "An unknown error occurred",
                loading: false
            });
        }
    };
    
    render() {
        const { fact, loading, error, animal } = this.state;
        return this.props.render(fact, loading, error, animal, this.fetchFact);
    }
}

export default AnimalFact;