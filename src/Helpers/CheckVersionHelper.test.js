/**
 * @format
 */

import 'react-native'

import CheckVersionHelper from './CheckVersionHelper'
import AlertStore from 'Stores/AlertStore'

jest.mock('Stores/AlertStore')


describe('Version Check', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

  it('should show update Popup', () => {
    let currentVersion = '4.2' 
    let latestVersion = '4.2.5' 
    CheckVersionHelper.checkIfDifferent(currentVersion, latestVersion)
    expect(AlertStore.setAndShow).toHaveBeenCalled()
  })

  it('should show update Popup', () => {
    let currentVersion = '4.2.1' 
    let latestVersion = '4.5'
    CheckVersionHelper.checkIfDifferent(currentVersion, latestVersion)
    expect(AlertStore.setAndShow).toHaveBeenCalled()
  })

  it('should not show update Popup', () => {
    let currentVersion = '4.5' 
    let latestVersion = '4.2.5' 
    CheckVersionHelper.checkIfDifferent(currentVersion, latestVersion)
    expect(AlertStore.setAndShow).not.toHaveBeenCalled()
  })

  it('should not show update Popup', () => {
    let currentVersion = '4.5.1' 
    let latestVersion = '4.2' 
    CheckVersionHelper.checkIfDifferent(currentVersion, latestVersion)
    expect(AlertStore.setAndShow).not.toHaveBeenCalled()
  })

})