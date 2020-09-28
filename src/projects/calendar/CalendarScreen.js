import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { Card, AlignCenter, PrimaryButton, Row } from 'AppStyles';
import { useForm } from "react-hook-form";
import { CalendarEvent } from 'models';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import './CalendarScreen.css';
import dayjs from 'dayjs';

function CalendarScreen() {
    let history = useHistory();
    const [calendar_events, setCalendarEvents] = useState([]);
    const [new_calendar_event_layout_visibility, setNewCalendarEventLayoutVisibility] = useState(false);
    const [selected_day, setSelectedDay] = useState(dayjs().format('YYYY-MM-DD'));

    const AddNewCalendarEventLayout = () => {
        const { register, handleSubmit, watch, errors } = useForm();


        return <form onSubmit={handleSubmit(createNewCalendarEvent)}>
            <div>
                <AddEventLabel>Adicionar evento no dia {dayjs(selected_day).format('DD/MM')}</AddEventLabel>
                <Input placeholder="Nome do evento" type="text" id="name" name="name" ref={register({ required: true })} ></Input>
                <span>{errors.name && errors.name.message}</span>

                <PrimaryButton type="submit">Adicionar esse evento</PrimaryButton>
            </div>
        </form>
    }

    const createNewCalendarEvent = (values) => {
        CalendarEvent.create({name: values.name, day: selected_day}).then((response) => {
            getCalendarEvents();
            setNewCalendarEventLayoutVisibility(false);
        })
    }


    const getCalendarEvents = (date) => {
        CalendarEvent.list({start_at: date}).then(response => {
            setCalendarEvents(response.data)
        })
    }

    useEffect(() => {
        getCalendarEvents();
    }, []);

    const handleDateClick = (arg) => { // bind with an arrow function
        debugger
        setSelectedDay(arg.dateStr)
        getCalendarEvents(arg.dateStr);
    }

    return (
        <AlignCenter>
            <MenuCard>
                <RowCenter>
                    <LeftMarginButton>
                        <ProjectTitle>Calendário</ProjectTitle>
                    </LeftMarginButton>
                    <LeftMarginButton>
                        <PrimaryButton onClick={() => setNewCalendarEventLayoutVisibility(true)}>Adicionar evento</PrimaryButton>
                    </LeftMarginButton>
                </RowCenter>
                <AlignCenter>
                    <LineDivider></LineDivider>
                </AlignCenter>
                <FullCalendar
               plugins={[ dayGridPlugin, interactionPlugin ]}
                initialView="dayGridMonth"
                selectable={true}
                events={calendar_events}
                  dateClick={handleDateClick}
                />
                {new_calendar_event_layout_visibility && <AddNewCalendarEventLayout></AddNewCalendarEventLayout>}
                <DescriptionLabel>Próximos eventos a partir de {dayjs(selected_day).format('DD/MM')}:</DescriptionLabel>
                {calendar_events.length > 0 ? calendar_events.map((event) => 
                    <div>
                        <DayLabel>{dayjs(event.day).format('DD/MM/YYYY')}</DayLabel>
                        <NameLabel>{event.name}</NameLabel>
                    </div>
                ) : <DescriptionLabel>Nenhum evento a partir dessa data.</DescriptionLabel>}
            </MenuCard>
        </AlignCenter>
    );
}



const AddEventLabel = styled.div`
    text-align: left;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 12px;
    margin-top: 15px;
    margin-bottom: -5px;
`


const DescriptionLabel = styled.div`
    font-weight: normal;
    text-transform: uppercase;
    font-size: 12px;
    margin-top: 10px;
`



const DayLabel = styled.div`
    text-align: left;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 0.75em;
    margin-top: 10px;
`

const NameLabel = styled.div`
    text-align: left;
    font-size: 0.85em;
    margin-top: 5px;
`


const LeftMarginButton = styled.div`
    margin-left: 10px;
`

const RowCenter = styled(Row)`
    align-items: center;
    justify-content: center;
`


const Input = styled.input`
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 100%;
    width: 100%;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 0.4rem;
    line-height: 1.5;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-sizing: border-box;
`


const MessageTitle = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 700;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 5px;
    margin-left: 10px;
`;

const MessageDescription = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 300;
    word-wrap: break-word;
    text-align: left;
    margin-left: 10px;
    margin-bottom: 10px;
`;

const MessageDivider = styled.div`
    height: 1px;
    background-color: #f2f2f2;
`

const LineDivider = styled.div`
    width: 90%;
    height: 3px;
    background-color: #283c46;
`

const MenuCard = styled(Card)`
    padding: 15px;
    margin-top: 20px;
    min-height: 400px;
    min-width: 300px;
    max-width: 300px;

    @media(min-width: 800px) {
        margin-top: 40px;
        width: 600px;
        width: 800px;
        height: 800px;
    }
`

const ToolCard = styled(Card)`
        position: relative;
        width: 240px;
        height: 240px;
        margin: 2%;
        vertical-align: top;
        font-size: 1.1rem;
        line-height: 1.3;
        text-align: left;
        text-rendering: optimizeLegibility;
        word-wrap: break-word;
        background: #fff;
`;

const ProjectTitle = styled.div`
    font-size: 22px;
    color: #283C46;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ToolTitle = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export default CalendarScreen