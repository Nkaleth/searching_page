import apiClient from './apiClient';

export default function fetchIndividuals(query) {
  return apiClient.post('/entities/_searchStream', {
    query,
    identityType: 'person',
    meta: false,
    limit: 10,
    torreGgId: '1562283',
    excludeContacts: true,
    excludedPeople: [],
  });
}
