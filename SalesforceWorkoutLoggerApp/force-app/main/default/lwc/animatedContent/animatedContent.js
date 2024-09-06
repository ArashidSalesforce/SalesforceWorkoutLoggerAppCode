import { LightningElement, wire } from 'lwc';
import getTopOpportunities from '@salesforce/apex/EnchantedOpportunityController.getTopOpportunities';
import getOpportunityStageStats from '@salesforce/apex/EnchantedOpportunityController.getOpportunityStageStats';
import { loadScript } from 'lightning/platformResourceLoader';
import chartjs from '@salesforce/resourceUrl/chartjs';

export default class AnimatedContent extends LightningElement {
    topOpportunities = [];
    chart;
    chartjsInitialized = false;

    @wire(getTopOpportunities)
    wiredTopOpportunities({ error, data }) {
        if (data) {
            this.topOpportunities = data;
        } else if (error) {
            console.error('Error fetching top opportunities', error);
        }
    }

    @wire(getOpportunityStageStats)
    wiredOpportunityStageStats({ error, data }) {
        if (data) {
            this.initializeChart(data);
        } else if (error) {
            console.error('Error fetching opportunity stage stats', error);
        }
    }

    renderedCallback() {
        if (this.chartjsInitialized) {
            return;
        }
        this.chartjsInitialized = true;

        loadScript(this, chartjs)
            .then(() => {
                console.log('ChartJS loaded successfully');
            })
            .catch(error => {
                console.error('Error loading ChartJS', error);
            });
    }

    initializeChart(data) {
        const ctx = this.template.querySelector('canvas.chart-canvas').getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    data: Object.values(data),
                    backgroundColor: [
                        '#FF6B6B', '#4ECDC4', '#45B7D1', '#FED766', '#2AB7CA'
                    ]
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right',
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }
}