import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  modal: '',
  mintModal: '',
  alertModal: '',
  showModal: '',
  connectedAccount: '',
  nft: null,
  nfts: [],
  transactions: [],
  contract: null,
  totalMinted: 0,
})

export { useGlobalState, setGlobalState, getGlobalState }
