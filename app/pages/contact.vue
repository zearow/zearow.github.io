<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
const VueHcaptcha = defineAsyncComponent(() => import('@hcaptcha/vue3-hcaptcha'))
const colorMode = useColorMode()

useSeoMeta({
  title: 'Contact - zearøw',
  description: 'Get in touch with zearøw to discuss your digital transformation needs.',
  ogTitle: 'Contact - zearøw',
  ogDescription: 'Get in touch with zearøw to discuss your digital transformation needs.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})

const serviceOptions = [
  'Business Process Analysis & Optimization',
  'Custom Software Development',
  'Stakeholder & Process Mapping',
  'Technology Alignment & Integration',
  'KPI Development & Measurement',
  'Change Management & Training',
  'Legacy System Modernization',
  'Data Analytics & Reporting',
  'Security & Compliance Consulting',
  'Digital Transformation Strategy'
]

const reasonOptions = [
  'Interested in our services',
  'Interested in SaaS products',
  'Career inquiry',
  'Privacy & data request',
  'Partnership opportunity',
  'General question'
]

const privacyRequestOptions = [
  'Right of access — request a copy of my data',
  'Right to rectification — correct inaccurate data',
  'Right to erasure — delete my data',
  'Right to withdraw consent',
  'Question about the privacy policy'
]

const schema = z.object({
  reason: z.string().min(1, 'Please select a reason for contact'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  services: z.array(z.string()).optional(),
  linkedin: z.string().optional().refine(
    (val) => !val || /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/.test(val),
    { message: 'Please enter a valid LinkedIn profile URL (e.g. https://linkedin.com/in/yourname)' }
  ),
  privacyRequests: z.array(z.string()).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

type Schema = z.output<typeof schema>

const route = useRoute()
const reasonFromQuery = computed(() => {
  const q = route.query.reason as string | undefined
  if (!q) return ''
  return reasonOptions.find(r => r.toLowerCase().includes(q.toLowerCase())) || ''
})

const state = reactive<Partial<Schema>>({
  reason: reasonFromQuery.value,
  name: '',
  email: '',
  company: '',
  services: [],
  linkedin: '',
  privacyRequests: [],
  message: ''
})

const submitted = ref(false)
const submitting = ref(false)
const submitError = ref('')
const hcaptchaToken = ref('')
const hcaptchaSiteKey = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'


function onCaptchaVerify(token: string) {
  hcaptchaToken.value = token
}

function onCaptchaExpire() {
  hcaptchaToken.value = ''
}

watch(() => colorMode.value, () => {
  hcaptchaToken.value = ''
})

const showServices = computed(() => state.reason === 'Interested in our services')
const showLinkedin = computed(() => state.reason === 'Career inquiry')
const showPrivacyRequests = computed(() => state.reason === 'Privacy & data request')

async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (event.data.reason === 'Career inquiry' && !event.data.linkedin) {
    submitError.value = 'Please provide your LinkedIn profile URL.'
    return
  }

  if (!hcaptchaToken.value) {
    submitError.value = 'Please complete the captcha verification.'
    return
  }

  submitting.value = true
  submitError.value = ''

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '758f71d8-a2ff-4ef0-88f0-49fbadb26f6d',
        subject: `[${event.data.reason}] New contact from ${event.data.name}`,
        from_name: event.data.name,
        reason: event.data.reason,
        email: event.data.email,
        company: event.data.company || 'Not provided',
        services: event.data.services?.length ? event.data.services.join(', ') : 'None selected',
        linkedin: event.data.linkedin || 'Not provided',
        privacy_requests: event.data.privacyRequests?.length ? event.data.privacyRequests.join(', ') : 'None selected',
        message: event.data.message,
        'h-captcha-response': hcaptchaToken.value
      })
    })

    const result = await response.json()

    if (result.success) {
      submitted.value = true
    } else {
      submitError.value = 'Something went wrong. Please try again or email us directly.'
    }
  } catch {
    submitError.value = 'Unable to send your message. Please check your connection and try again.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div>
    <UPageHero
      title="Get in Touch"
      description="Ready to start your digital transformation journey? We would love to hear from you"
      :ui="{ root: 'relative !pb-0' }"
    >
      <template #top>
        <HeroParticles />
      </template>
    </UPageHero>

    <ScrollReveal>
      <UPageSection :ui="{ root: '!pt-0', container: '!pt-0' }">
        <!-- Success state -->
        <div v-if="submitted" class="text-center py-16">
          <img src="/undraw_message-sent_iyz6.svg" alt="Message sent" class="w-full max-w-xs mx-auto mb-8" />
          <h2 class="text-2xl font-bold text-(--ui-text-highlighted)">Thank you for reaching out!</h2>
          <p class="mt-3 text-(--ui-text-muted) max-w-md mx-auto">
            <template v-if="state.reason === 'Interested in SaaS products'">
              We've added you to our notification list. We'll let you know as soon as our products are ready to launch.
            </template>
            <template v-else>
              We've received your message and will get back to you
              <template v-if="state.reason === 'Privacy & data request'">within 30 calendar days</template>
              <template v-else-if="state.reason === 'Career inquiry' || state.reason === 'Partnership opportunity'">within 10 working days</template>
              <template v-else>within 1-2 business days</template>.
            </template>
            In the meantime, feel free to explore our services or read our latest insights on the blog.
          </p>
          <div class="mt-6 flex justify-center gap-3">
            <UButton to="/services" variant="outline" label="Explore Services" />
            <UButton to="/blog" variant="outline" label="Read Our Blog" />
          </div>
        </div>

        <!-- Form -->
        <UContainer v-else class="max-w-2xl">
            <UForm :schema="schema" :state="state" @submit="onSubmit" class="space-y-6">
              <UFormField label="Reason for contact" name="reason" required>
                <USelect v-model="state.reason" :items="reasonOptions" placeholder="Select a reason..." size="lg" class="w-full" />
              </UFormField>

              <UFormField v-if="showServices" label="Services you're interested in" name="services" hint="Optional">
                <UCheckboxGroup
                  v-model="state.services"
                  :items="serviceOptions"
                  :ui="{ root: 'gap-4' }"
                />
              </UFormField>

              <UFormField v-if="showPrivacyRequests" label="What would you like to request?" name="privacyRequests" required>
                <UCheckboxGroup
                  v-model="state.privacyRequests"
                  :items="privacyRequestOptions"
                  :ui="{ root: 'gap-4' }"
                />
              </UFormField>

              <UFormField label="Name" name="name" required>
                <UInput v-model="state.name" placeholder="Your name" size="lg" class="w-full" />
              </UFormField>

              <UFormField label="Email" name="email" required>
                <UInput v-model="state.email" type="email" placeholder="you@company.com" size="lg" class="w-full" />
              </UFormField>

              <div v-if="showPrivacyRequests" class="px-4 py-3 rounded-lg border-l-4 border-primary-400 bg-primary-50 text-primary-800 dark:bg-primary-950 dark:text-primary-200 text-sm">
                <span class="font-semibold">Important:</span> Your data is stored by email address. Please use the same email address you originally contacted us with so we can locate your records.
              </div>

              <UFormField v-if="showLinkedin" label="LinkedIn profile" name="linkedin" required>
                <UInput v-model="state.linkedin" placeholder="https://linkedin.com/in/yourprofile" size="lg" class="w-full" />
              </UFormField>

              <UFormField v-if="!showLinkedin && !showPrivacyRequests" label="Company" name="company" hint="Optional">
                <UInput v-model="state.company" placeholder="Your company" size="lg" class="w-full" />
              </UFormField>

              <UFormField label="Message" name="message" required>
                <UTextarea v-model="state.message" :placeholder="showLinkedin ? 'Tell us about yourself...' : showPrivacyRequests ? 'Any additional details...' : 'Tell us about your project...'" size="lg" :rows="5" class="w-full" />
              </UFormField>

              <div class="flex flex-col items-center gap-2">
                <ClientOnly>
                  <VueHcaptcha
                    :key="colorMode.value"
                    :sitekey="hcaptchaSiteKey"
                    :theme="colorMode.value === 'dark' ? 'dark' : 'light'"
                    size="normal"
                    @verify="onCaptchaVerify"
                    @expired="onCaptchaExpire"
                  />
                </ClientOnly>
                <UIcon v-if="hcaptchaToken" name="i-lucide-check-circle" class="size-5 text-green-500" />
              </div>

              <UButton type="submit" size="lg" :label="submitting ? 'Sending...' : 'Send Message'" :loading="submitting" :disabled="submitting || !hcaptchaToken" :color="hcaptchaToken ? 'primary' : 'neutral'" :variant="hcaptchaToken ? 'solid' : 'soft'" block />

              <p v-if="submitError" class="text-sm text-red-500 text-center">{{ submitError }}</p>

              <p class="text-sm text-(--ui-text-muted) text-center">
                <template v-if="showPrivacyRequests">
                  We will process your request within 30 calendar days. Every request is handled by a real person on our team.
                </template>
                <template v-else-if="state.reason === 'Interested in SaaS products'">
                  We'll notify you as soon as our products are ready to launch. Every message is read by a real person on our team.
                </template>
                <template v-else-if="showLinkedin || state.reason === 'Partnership opportunity'">
                  We typically respond within 10 working days. Every message is read by a real person on our team.
                </template>
                <template v-else>
                  We typically respond within 1-2 business days. Every message is read by a real person on our team.
                </template>
              </p>
            </UForm>
        </UContainer>
      </UPageSection>
    </ScrollReveal>

  </div>
</template>
