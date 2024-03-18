import styled from "styled-components";
import { Card } from "reactstrap";

export const FilterLeftStyle = styled(Card)`
  .hover-click {
    cursor: pointer;
    &:hover {
      background-color: var(--orange);
      color: white;
      transition: all 0.6s;
    }
  }
`;

export const CalendarStyle = styled.div`
  .rbc-btn {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button.rbc-btn {
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
  }

  button[disabled].rbc-btn {
    cursor: not-allowed;
  }

  button.rbc-input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  .rbc-calendar {
    box-sizing: border-box;
    height: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: stretch;
    align-items: stretch;
  }

  .rbc-calendar *,
  .rbc-calendar :after,
  .rbc-calendar :before {
    box-sizing: inherit;
  }

  .rbc-abs-full,
  .rbc-row-bg {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .rbc-ellipsis,
  .rbc-event-label,
  .rbc-row-segment .rbc-event-content,
  .rbc-show-more {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .rbc-rtl {
    direction: rtl;
  }

  .rbc-off-range {
    color: #999;
  }

  .rbc-header {
    overflow: hidden;
    -webkit-flex: 1 0 0%;
    flex: 1 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
    vertical-align: middle;
    font-weight: 700;
    font-size: 1em;
    min-height: 0;
    border-bottom: 1px solid #ddd;
    color: #888;
  }

  .rbc-header > a,
  .rbc-header > a:active,
  .rbc-header > a:visited {
    color: inherit;
    text-decoration: none;
  }

  .rbc-row-content {
    position: relative;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    z-index: 4;
    min-height: 50px;
  }

  .rbc-toolbar {
    text-align: center;
    margin-bottom: 1em;
    display: flex;
  }

  @media screen and (min-width: 1270px) {
    .rbc-toolbar {
      display: -webkit-flex;
      display: flex;
    }
  }

  .rbc-toolbar .rbc-toolbar-label {
    -webkit-flex-grow: 1;
    flex-grow: 1;
    padding: 0 10px;
    text-align: center;
    font-weight: 300;
    font-family: inherit;
    line-height: 1.1;
    color: inherit;
    font-weight: 400;
    margin: 0;
    font-size: 1.8em;
  }

  .rbc-toolbar button {
    background-color: #f96332;
    color: #fff;
    font-weight: 400;
    font-size: 0.8571em;
    line-height: 1.35em;
    border: none;
    margin: 0 0 0 2px;
    border-radius: 0.1875rem;
    padding: 8px 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none;
    text-transform: lowercase;
  }

  .rbc-toolbar button:focus {
    outline: none;
  }

  .rbc-btn-group {
    display: inline-block;
  }

  .rbc-btn-group button {
    margin: 0 0 0 2px;
    border-radius: 0.1875rem;
  }

  @media screen and (max-width: 526px) {
    .rbc-btn-group button {
      margin: 2px !important;
    }
  }

  .rbc-btn-group button + button {
    margin: 0 0 0 2px;
    border-radius: 0.1875rem;
  }

  .rbc-btn-group + .rbc-btn-group,
  .rbc-btn-group + button {
    margin-left: 10px;
  }

  .rbc-slot-selecting .rbc-event {
    cursor: inherit;
    pointer-events: none;
  }

  .rbc-event.rbc-selected {
    background-color: #265985;
  }

  .rbc-event-label {
    font-size: 80%;
  }

  .rbc-event-overlaps {
    box-shadow: -1px 1px 5px 0 rgba(51, 51, 51, 0.5);
  }

  .rbc-event-continues-prior {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .rbc-event-continues-after {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .rbc-event-continues-earlier {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .rbc-event-continues-day-after,
  .rbc-event-continues-later {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .rbc-event-continues-day-prior {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .rbc-row {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
  }

  .rbc-row-segment {
    padding: 0 1px 1px;
  }

  .rbc-selected-cell {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .rbc-show-more {
    background-color: hsla(0, 0%, 100%, 0.3);
    z-index: 4;
    font-weight: 700;
    font-size: 85%;
    height: auto;
    line-height: normal;
    white-space: nowrap;
  }

  .rbc-month-view {
    position: relative;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-flex: 1 0 0;
    flex: 1 0;
    width: 100%;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    height: 100%;
    border: none;
    border-top: 1px solid #ddd;
    border-top: none;
  }

  .rbc-month-header {
    -webkit-flex-direction: row;
    flex-direction: row;
  }

  .rbc-month-header,
  .rbc-month-row {
    display: -webkit-flex;
    display: flex;
  }

  .rbc-month-row {
    position: relative;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-flex: 1 0 0;
    flex: 1 0;
    -ms-flex-preferred-size: 0;
    overflow: hidden;
    height: 108px;
  }

  .rbc-month-row + .rbc-month-row {
    border-top: 1px solid #ddd;
  }

  .rbc-date-cell {
    -webkit-flex: 1 1 0;
    flex: 1 1;
    min-width: 0;
    padding: 2px;
    text-align: right;
  }

  .rbc-date-cell > a,
  .rbc-date-cell > a:active,
  .rbc-date-cell > a:visited {
    color: inherit;
    text-decoration: none;
  }

  .rbc-row-bg {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-flex: 1 0 0;
    flex: 1 0;
    overflow: hidden;
  }

  .rbc-day-bg {
    -webkit-flex: 1 0 0%;
    flex: 1 0;
  }

  .rbc-day-bg + .rbc-day-bg {
    border-left: 1px solid #ddd;
  }

  .rbc-rtl .rbc-day-bg + .rbc-day-bg {
    border-left-width: 0;
    border-right: 1px solid #ddd;
  }

  .rbc-overlay {
    position: absolute;
    z-index: 5;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    padding: 10px;
  }

  .rbc-overlay > * + * {
    margin-top: 1px;
  }

  .rbc-overlay-header {
    border-bottom: 1px solid #e5e5e5;
    margin: -10px -10px 5px;
    padding: 2px 10px;
  }

  .rbc-agenda-view {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-flex: 1 0 0;
    flex: 1 0;
    overflow: auto;
  }

  .rbc-agenda-view table.rbc-agenda-table {
    width: 100%;
    border: 1px solid #ddd;
    border-spacing: 0;
    border-collapse: collapse;
  }

  .rbc-agenda-view table.rbc-agenda-table tbody > tr > td {
    padding: 5px 10px;
    vertical-align: top;
  }

  .rbc-agenda-view table.rbc-agenda-table .rbc-agenda-time-cell {
    padding-left: 15px;
    padding-right: 15px;
    text-transform: lowercase;
  }

  .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {
    border-left: 1px solid #ddd;
  }

  .rbc-rtl .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {
    border-left-width: 0;
    border-right: 1px solid #ddd;
  }

  .rbc-agenda-view table.rbc-agenda-table tbody > tr + tr {
    border-top: 1px solid #ddd;
  }

  .rbc-agenda-view table.rbc-agenda-table thead > tr > th {
    padding: 3px 5px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .rbc-rtl .rbc-agenda-view table.rbc-agenda-table thead > tr > th {
    text-align: right;
  }

  .rbc-agenda-time-cell {
    text-transform: lowercase;
  }

  .rbc-agenda-time-cell .rbc-continues-after:after {
    content: " »";
  }

  .rbc-agenda-time-cell .rbc-continues-prior:before {
    content: "« ";
  }

  .rbc-agenda-date-cell,
  .rbc-agenda-time-cell {
    white-space: nowrap;
  }

  .rbc-agenda-event-cell {
    width: 100%;
  }

  .rbc-time-column {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    min-height: 100%;
  }

  .rbc-time-column .rbc-timeslot-group {
    -webkit-flex: 1;
    flex: 1 1;
  }

  .rbc-timeslot-group {
    border-bottom: 1px solid #ddd;
    min-height: 40px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: column nowrap;
    flex-flow: column nowrap;
  }

  .rbc-header-gutter,
  .rbc-time-gutter {
    -webkit-flex: none;
    flex: none;
  }

  .rbc-label {
    padding: 0 5px;
  }

  .rbc-day-slot {
    position: relative;
  }

  .rbc-day-slot .rbc-events-container {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 10px;
    top: 0;
  }

  .rbc-day-slot .rbc-events-container.rbc-is-rtl {
    left: 10px;
    right: 0;
  }

  .rbc-day-slot .rbc-event {
    display: -webkit-flex;
    display: flex;
    max-height: 100%;
    min-height: 20px;
    -webkit-flex-flow: column wrap;
    flex-flow: column wrap;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    overflow: hidden;
    position: absolute;
  }

  .rbc-day-slot .rbc-event-label {
    -webkit-flex: none;
    flex: none;
    padding-right: 5px;
    width: auto;
    font-weight: 700;
    box-sizing: content-box;
    color: #fff;
    white-space: nowrap;
  }

  .rbc-day-slot .rbc-event-content {
    width: 100%;
    -webkit-flex: 1 1 0;
    flex: 1 1;
    word-wrap: break-word;
    line-height: 1;
    height: 100%;
    min-height: 1em;
  }

  .rbc-day-slot .rbc-time-slot + .rbc-time-slot {
    border-top: 1px dotted #ddd;
  }

  .rbc-time-slot {
    -webkit-flex: 1 0 0;
    flex: 1 0;
  }

  .rbc-time-slot.rbc-now {
    font-weight: 700;
  }

  .rbc-day-header {
    text-align: center;
  }

  .rbc-slot-selection {
    z-index: 10;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 75%;
    width: 100%;
    padding: 3px;
  }

  .rbc-slot-selecting {
    cursor: move;
  }

  .rbc-time-view {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-flex: 1;
    flex: 1 1;
    width: 100%;
    min-height: 0;
    border: none;
    border-bottom: 1px solid #ddd;
  }

  .rbc-time-view .rbc-time-gutter {
    white-space: nowrap;
  }

  .rbc-time-view .rbc-allday-cell {
    box-sizing: content-box;
    width: 100%;
    position: relative;
  }

  .rbc-time-view .rbc-allday-events {
    position: relative;
    z-index: 4;
  }

  .rbc-time-view .rbc-row {
    box-sizing: border-box;
    min-height: 20px;
  }

  .rbc-time-header {
    display: -webkit-flex;
    display: flex;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-flex-direction: row;
    flex-direction: row;
  }

  .rbc-time-header.rbc-overflowing {
    border-right: 1px solid #ddd;
  }

  .rbc-rtl .rbc-time-header.rbc-overflowing {
    border-right-width: 0;
    border-left: 1px solid #ddd;
  }

  .rbc-time-header > .rbc-row.rbc-row-resource,
  .rbc-time-header > .rbc-row:first-child {
    border-bottom: 1px solid #ddd;
  }

  .rbc-time-header-content {
    -webkit-flex: 1;
    flex: 1 1;
    min-width: 0;
    -webkit-flex-direction: column;
    flex-direction: column;
    border-left: 1px solid #ddd;
  }

  .rbc-rtl .rbc-time-header-content {
    border-left-width: 0;
    border-right: 1px solid #ddd;
  }

  .rbc-time-content {
    display: -webkit-flex;
    display: flex;
    -webkit-flex: 1 0 0%;
    flex: 1 0;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    width: 100%;
    border-top: 2px solid #ddd;
    overflow-y: auto;
    position: relative;
  }

  .rbc-time-content > .rbc-time-gutter {
    -webkit-flex: none;
    flex: none;
  }

  .rbc-time-content > * + * > * {
    border-left: 1px solid #ddd;
  }

  .rbc-rtl .rbc-time-content > * + * > * {
    border-left-width: 0;
    border-right: 1px solid #ddd;
  }

  .rbc-time-content > .rbc-day-slot {
    width: 100%;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-select: none;
  }

  .rbc-current-time-indicator {
    position: absolute;
    z-index: 3;
    height: 1px;
    background-color: #74ad31;
    pointer-events: none;
  }

  .rbc-event {
    margin: 2px 5px 0;
    padding: 0 1px;
    position: relative;
    display: block;
    font-size: 0.85em;
    line-height: 1.3;
    border-radius: 2px;
    background-color: #18ce0f;
    font-weight: 400;
    text-align: right;
  }

  .rbc-event.event-azure {
    background-color: #2ca8ff;
  }

  .rbc-event.event-green {
    background-color: #18ce0f;
  }

  .rbc-event.event-orange {
    background-color: #ffb236;
  }

  .rbc-event.event-red {
    background-color: #ff3636;
  }

  .rbc-event.event-default {
    background-color: #999;
  }

  .rbc-event .rbc-event-content {
    position: relative;
    z-index: 2;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;
    padding: 0 5px;
  }

  .rbc-day-slot .rbc-event {
    display: block !important;
    height: unset !important;
    max-height: unset !important;
  }

  .rbc-today {
    background-color: #f5f5f5;
  }
`;
