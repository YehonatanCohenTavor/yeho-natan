import React, { useState } from 'react';

export function setSessionStorage(dataType, fetchedData) {
    sessionStorage.setItem(dataType, JSON.stringify(fetchedData));
}