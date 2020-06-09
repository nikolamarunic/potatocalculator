/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHolding = /* GraphQL */ `
  subscription OnCreateHolding($owner: String!) {
    onCreateHolding(owner: $owner) {
      name
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateHolding = /* GraphQL */ `
  subscription OnUpdateHolding($owner: String!) {
    onUpdateHolding(owner: $owner) {
      name
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteHolding = /* GraphQL */ `
  subscription OnDeleteHolding($owner: String!) {
    onDeleteHolding(owner: $owner) {
      name
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($owner: String!) {
    onCreateAccount(owner: $owner) {
      name
      values {
        name
        value
        createdAt
        updatedAt
        owner
      }
      limit
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($owner: String!) {
    onUpdateAccount(owner: $owner) {
      name
      values {
        name
        value
        createdAt
        updatedAt
        owner
      }
      limit
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($owner: String!) {
    onDeleteAccount(owner: $owner) {
      name
      values {
        name
        value
        createdAt
        updatedAt
        owner
      }
      limit
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateChange = /* GraphQL */ `
  subscription OnCreateChange($owner: String!) {
    onCreateChange(owner: $owner) {
      name
      values {
        name
        value
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateChange = /* GraphQL */ `
  subscription OnUpdateChange($owner: String!) {
    onUpdateChange(owner: $owner) {
      name
      values {
        name
        value
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteChange = /* GraphQL */ `
  subscription OnDeleteChange($owner: String!) {
    onDeleteChange(owner: $owner) {
      name
      values {
        name
        value
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
