export const ProfileData = [
    { 
        id: 1,
        date: "Jun 2025",
        businessObj: "Ensure business continuity and data security across all digital platforms",
        StrategicInit: "Digital Transformation Initiative 2025",
        riskTitle: "Cybersecurity Breach",
        diskDescr: 'Business Cyber attack',
        owner: 'IT Security Team',
        reportingPeriod: 'FY26 Q1',
        Pillar: "Technology",
        Entity: "Entity 1",
        RiskAssessment: {
            financial: "R 200M potential loss",
            regulatory: "GDPR compliance breach",
            reputational: "Major brand damage",
            Likelyhood: '74%',
            velocity: 'moderate',
            grossExposure: '200.2',
            grossPosition: '148',
            residualExposure: '50.0',
            grossExposureVariance: '+2.3%',
        },
        RiskAppetite: {
            measure1: {
                raid: 1,
                expressionRisk: "Averse",
                type: "Qualitative",
                explaination: "Zero tolerance for data breaches affecting customer information",
                rag:"R"
            },
            measure2: {
                raid: 2,
                expressionRisk: "Averse",
                type: "Quantitative",
                explaination: "Maximum acceptable financial exposure: R 50M",
                rag:"G"
            }   
        },
        earlyWaringSignals: {
            signal1: {
                ewsid: 1,
                keyRiskIndicator: "Increased failed login attempts",
                rag:"A",
                comments: "Monitoring system alerts showing 300% increase",
                futuretrend: "Expected to continue rising",
            },
            signal2: {
                ewsid: 2,
                keyRiskIndicator: "Unusual network traffic patterns",
                rag:"A",
                comments: "Detected during off-peak hours",
                futuretrend: "Requires immediate investigation",
            },
            signal3: {
                ewsid: 3,
                keyRiskIndicator: "Phishing email reports",
                rag:"R",
                comments: "Multiple sophisticated phishing campaigns detected",
                futuretrend: "High alert status",
            },   
        },
        keyRiskResponseActivity: {
            Potentialrootcause1: "Inadequate multi-factor authentication implementation",
            Potentialrootcause2: "Outdated security protocols",
            Potentialrootcause3: "Limited employee cybersecurity training",
            ControlActivity: {
                activity1: {
                    cid: 1,
                    descripControlActivity: "Implement enhanced MFA across all systems",
                    natureofControl: "Preventative",
                    ControlOwner: "IT Security Team",
                    rag:"A",
                    correctiveActions: "Rollout completion by end of Q2",
                    dueDate: "2025-09-30",
                },
                activity2: {
                    cid: 2,
                    descripControlActivity: "Conduct security awareness training",
                    natureofControl: "Preventative",
                    ControlOwner: "HR Department",
                    rag:"G",
                    correctiveActions: "Quarterly training sessions scheduled",
                    dueDate: "2025-06-15",
                },
                activity3: {
                    cid: 3,
                    descripControlActivity: "Upgrade firewall and intrusion detection systems",
                    natureofControl: "Preventative",
                    ControlOwner: "Network Team",
                    rag:"A",
                    correctiveActions: "Vendor selection in progress",
                    dueDate: "2025-08-20",
                },
            }, 
        },
    },
    { 
        id: 2,
        date: "Jun 2025",
        businessObj: "Maintain operational efficiency and service delivery standards",
        StrategicInit: "Operational Excellence Program",
        riskTitle: "Services from Vendor Disruption",
        diskDescr: 'Vendor delivery failures impacting operations',
        owner: 'Operations Director',
        reportingPeriod: 'FY26 Q1',
        Pillar: "Operations",
        Entity: "Entity 2",
        RiskAssessment: {
            financial: "R 150M potential revenue loss",
            regulatory: "Contract compliance issues",
            reputational: "Customer service impact",
            Likelyhood: '65%',
            velocity: 'high',
            grossExposure: '150.5',
            grossPosition: '120.8',
            residualExposure: '45.2',
            grossExposureVariance: '+1.8%',
        },
        RiskAppetite: {
            measure1: {
                raid: 1,
                expressionRisk: "Moderate",
                type: "Qualitative",
                explaination: "Acceptable delay up to 48 hours for non-critical supplies",
                rag:"A"
            },
            measure2: {
                raid: 2,
                expressionRisk: "Averse",
                type: "Quantitative",
                explaination: "Maximum acceptable operational disruption: 5% of production",
                rag:"G"
            }   
        },
        earlyWaringSignals: {
            signal1: {
                ewsid: 1,
                keyRiskIndicator: "Vendor delivery performance below 95%",
                rag:"A",
                comments: "Multiple key suppliers showing declining performance",
                futuretrend: "Requires supplier review",
            },
            signal2: {
                ewsid: 2,
                keyRiskIndicator: "Raw material inventory levels below threshold",
                rag:"R",
                comments: "Critical components at 2 weeks supply",
                futuretrend: "Immediate action required",
            }, 
        },
        keyRiskResponseActivity: {
            Potentialrootcause1: "Single-source dependency for critical components",
            Potentialrootcause2: "Inadequate supplier performance monitoring",
            ControlActivity: {
                activity1: {
                    cid: 1,
                    descripControlActivity: "Diversify supplier base for critical items",
                    natureofControl: "Preventative",
                    ControlOwner: "Procurement Team",
                    rag:"A",
                    correctiveActions: "Identify and onboard 2 alternative suppliers",
                    dueDate: "2025-07-31",
                },
                activity2: {
                    cid: 2,
                    descripControlActivity: "Implement real-time supplier performance dashboard",
                    natureofControl: "Detective",
                    ControlOwner: "Operations Analytics",
                    rag:"G",
                    correctiveActions: "Dashboard development in progress",
                    dueDate: "2025-05-30",
                },
            }, 
        },
    },
    { 
        id: 3,
        date: "Jun 2025",
        businessObj: "Ensure regulatory compliance across all business units",
        StrategicInit: "Compliance Framework Enhancement",
        riskTitle: "Regulatory Non-compliance",
        diskDescr: 'Failure to meet updated industry regulations',
        owner: 'Compliance Officer',
        reportingPeriod: 'FY26 Q1',
        Pillar: "Legal",
        Entity: "Entity 3",
        RiskAssessment: {
            financial: "R 80M potential fines",
            regulatory: "Multiple compliance breaches",
            reputational: "Regulatory scrutiny and license risk",
            Likelyhood: '45%',
            velocity: 'low',
            grossExposure: '80.3',
            grossPosition: '65.1',
            residualExposure: '25.4',
            grossExposureVariance: '+0.5%',
        },
        RiskAppetite: {
            measure1: {
                raid: 1,
                expressionRisk: "Averse",
                type: "Qualitative",
                explaination: "Zero tolerance for regulatory breaches",
                rag:"R"
            },
            measure2: {
                raid: 2,
                expressionRisk: "Cautious",
                type: "Quantitative",
                explaination: "Maximum acceptable compliance gap: 2%",
                rag:"A"
            }   
        },
        earlyWaringSignals: {
            signal1: {
                ewsid: 1,
                keyRiskIndicator: "Regulatory change notifications",
                rag:"A",
                comments: "3 new regulations requiring implementation",
                futuretrend: "Increasing regulatory complexity",
            },
            signal2: {
                ewsid: 2,
                keyRiskIndicator: "Internal audit findings",
                rag:"G",
                comments: "Minor non-compliance issues identified",
                futuretrend: "Under control with action plan",
            },
        },
        keyRiskResponseActivity: {
            Potentialrootcause1: "Inadequate regulatory change monitoring process",
            Potentialrootcause2: "Limited compliance training for staff",
            ControlActivity: {
                activity1: {
                    cid: 1,
                    descripControlActivity: "Establish regulatory change monitoring system",
                    natureofControl: "Preventative",
                    ControlOwner: "Compliance Team",
                    rag:"A",
                    correctiveActions: "System implementation scheduled for Q2",
                    dueDate: "2025-08-15",
                },
                activity2: {
                    cid: 2,
                    descripControlActivity: "Conduct compliance training workshops",
                    natureofControl: "Preventative",
                    ControlOwner: "Training Department",
                    rag:"G",
                    correctiveActions: "Training materials being developed",
                    dueDate: "2025-06-30",
                },
            }, 
        },
    },
    // Add 7 more samples following the same structure...
    { 
        id: 4,
        date: "Jun 2025",
        businessObj: "Achieve revenue growth targets",
        StrategicInit: "Market Expansion Strategy",
        riskTitle: "Market Volatility",
        diskDescr: 'Economic downturn impacting sales',
        owner: 'Sales Director',
        reportingPeriod: 'FY26 Q1',
        Pillar: "Sales",
        Entity: "Entity 4",
        RiskAssessment: {
            financial: "R 120M revenue at risk",
            regulatory: "Market conduct requirements",
            reputational: "Customer retention challenges",
            Likelyhood: '55%',
            velocity: 'moderate',
            grossExposure: '120.8',
            grossPosition: '95.6',
            residualExposure: '40.2',
            grossExposureVariance: '+1.2%',
        },
        RiskAppetite: {
            measure1: {
                raid: 1,
                expressionRisk: "Seeking",
                type: "Qualitative",
                explaination: "Accept moderate market volatility for growth opportunities",
                rag:"G"
            },
            measure2: {
                raid: 2,
                expressionRisk: "Cautious",
                type: "Quantitative",
                explaination: "Maximum revenue variance: 15% from target",
                rag:"A"
            }   
        },
        earlyWaringSignals: {
            signal1: {
                ewsid: 1,
                keyRiskIndicator: "Market share decline",
                rag:"A",
                comments: "2% decline in key markets",
                futuretrend: "Monitoring competitive activity",
            },
        },
        keyRiskResponseActivity: {
            Potentialrootcause1: "Inadequate market intelligence",
            ControlActivity: {
                activity1: {
                    cid: 1,
                    descripControlActivity: "Enhance market monitoring capabilities",
                    natureofControl: "Preventative",
                    ControlOwner: "Market Research",
                    rag:"G",
                    correctiveActions: "New analytics tools being implemented",
                    dueDate: "2025-07-20",
                },
            }, 
        },
    },
    
];