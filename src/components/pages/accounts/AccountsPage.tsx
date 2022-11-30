import React, { useState } from 'react'
import { CreateAccountProvider } from '../../../context/CreateAccountProvider'
import { PageContent } from '../../ui/page-content/PageContent'
import { ContentAccountSection } from './ContentAccountSection'
import { CreateAccountSection } from './CreateAccountSection'

export const AccountsPage = () => {
  const [showAccountsContent, setShowAccountsContent] = useState(true)

  const handleCreateAccount = () => {
    setShowAccountsContent(!showAccountsContent)
  }

  const handleBackToPanel = () => {
    setShowAccountsContent(!showAccountsContent)
  }
  return (
    <PageContent>
      <CreateAccountProvider>
        <div className="h-full sm:px-8 pt-4">
          <ContentAccountSection
            isVisible={showAccountsContent}
            handleCreateAccount={handleCreateAccount}
          ></ContentAccountSection>
          <CreateAccountSection isVisible={!showAccountsContent} handleBack={handleBackToPanel} />
        </div>
      </CreateAccountProvider>
    </PageContent>
  )
}
