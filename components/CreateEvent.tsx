import React, { useState, useEffect, ChangeEvent, ReactText } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

import { createEvent, getEventType, setEvent } from '../api/sports';
import { EventType } from '../model/Event';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-items: center;
  min-height: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-items: center;
  min-height: 100%;
`;

export const CreateEvent: React.FC = () => {
  const [eventTypes, setEventTypes] = useState<EventType[]>();

  const formik = useFormik({
    initialValues: {
      eventType: '',
      title: '',
      location: '',
      date: '',
      time: '',
      capacity: 0,
      price: 0,
      description: '',
    },
    onSubmit: (values) => {
      console.log(values);
      createEvent(values);
    },
  });

  useEffect(() => {
    const getEventTypes = async () => {
      const data = await getEventType();

      setEventTypes(data);
    };

    getEventTypes();
  }, []);

  return (
    <Container>
      <h1>Hello create</h1>
      <StyledForm onSubmit={formik.handleSubmit}>
        <ul>
          <li>
            <label htmlFor="eventType">Select your event</label>
            <select
              id="eventType"
              onChange={formik.handleChange}
              value={formik.values.eventType}
            >
              {eventTypes?.map((eventType, index) => (
                <option key={index}>{eventType.title}</option>
              ))}
            </select>
          </li>
          <li>
            <label htmlFor="title">Title of your event</label>
            <input
              id="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </li>
          <li>
            <label htmlFor="location">Title of your event</label>
            <input
              id="location"
              onChange={formik.handleChange}
              value={formik.values.location}
            />
          </li>
          <li>
            <label htmlFor="date">Date of the event:</label>
            <input
              type="date"
              id="date"
              min="2000-01-02"
              onChange={formik.handleChange}
              value={formik.values.date}
            />
          </li>
          <li>
            <label htmlFor="capacity">Capacity of the event</label>
            <input
              type="number"
              id="capacity"
              max="100"
              onChange={formik.handleChange}
              value={formik.values.capacity}
            />
          </li>
          <li>
            <label htmlFor="price">Price of the event</label>
            <input
              type="number"
              id="price"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
          </li>
          <li>
            <label htmlFor="description">Describe your event</label>
            <textarea
              id="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </li>
          <li>
            <button>Create Event</button>
          </li>
        </ul>
      </StyledForm>
    </Container>
  );
};
